import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import type { HTMLAttributes } from 'react';
import './styles.css';

export interface FlippyProps extends HTMLAttributes<HTMLDivElement> {
  flipDirection?: 'vertical' | 'horizontal';
  isFlipped?: boolean;
  flipOnHover?: boolean;
  flipOnClick?: boolean;
}

const Flippy = forwardRef(
  (
    {
      className,
      style,
      children,
      flipDirection = 'horizontal',
      flipOnHover = false,
      flipOnClick = true,
      isFlipped: _isFlipped = false,
      onMouseEnter = () => {},
      onMouseLeave = () => {},
      onTouchStart = () => {},
      onClick = () => {},
      ...rest
    }: FlippyProps,
    ref,
  ) => {
    const [isFlipped, setFlipped] = useState(false);
    const simpleFlag = useRef({ isTouchDevice: false });
    const [isTouchDevice, setTouchDevice] = useState(false);
    const toggle = useCallback(() => setFlipped(!isFlipped), [isFlipped]);

    useImperativeHandle(ref, () => ({ toggle }));

    const handleTouchStart = useCallback(
      (event: any) => {
        if (!isTouchDevice) {
          simpleFlag.current.isTouchDevice = true;
          setTouchDevice(true);
        }
        onTouchStart(event);
      },
      [isTouchDevice, onTouchStart],
    );

    const handleMouseEnter = useCallback(
      (event: any) => {
        if (flipOnHover && !simpleFlag.current.isTouchDevice) {
          setFlipped(true);
        }
        onMouseEnter(event);
      },
      [flipOnHover, onMouseEnter],
    );

    const handleMouseLeave = useCallback(
      (event: any) => {
        if (flipOnHover && !simpleFlag.current.isTouchDevice) {
          setFlipped(false);
        }
        onMouseLeave(event);
      },
      [flipOnHover, onMouseLeave],
    );

    const handleClick = useCallback(
      (event: any) => {
        switch (true) {
          case flipOnHover && !simpleFlag.current.isTouchDevice:
          case !flipOnClick && !flipOnHover:
            break;
          default:
            setFlipped(!isFlipped);
            break;
        }
        onClick(event);
      },
      [flipOnClick, flipOnHover, isFlipped, onClick],
    );

    useEffect(() => {
      if (typeof _isFlipped === 'boolean' && _isFlipped !== isFlipped) {
        setFlipped(_isFlipped);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_isFlipped]);

    return (
      <div
        {...rest}
        className={`flippy-container ${className || ''}`}
        style={{
          ...style,
        }}
        onTouchStart={handleTouchStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className={`flippy-cardContainer-wrapper ${flipDirection}`}>
          <div
            className={`flippy-cardContainer ${isFlipped ? 'isActive' : ''} ${
              isTouchDevice ? 'istouchdevice' : ''
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);

export default Flippy;
