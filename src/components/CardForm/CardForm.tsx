import {
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useForm, UseFormReset } from 'react-hook-form';
import { FormHTMLAttributes } from 'react';
import { DrinkingGameCard } from '../../models/DrinkingGameCard';
import DrinkingGameTypes from '../../models/DrinkingGameTypes';

const DRINKING_GAMES_TYPES = [
  { label: 'Do or Drink', value: DrinkingGameTypes.DoOrDrinkCard },
];

export interface CardsFormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (
    data: DrinkingGameCard,
    reset: UseFormReset<DrinkingGameCard>,
  ) => any;
  defaultValues?: Partial<DrinkingGameCard>;
  loading?: boolean;
}
export default function CardsForm({
  loading,
  onSubmit = () => {},
  defaultValues = { type: DrinkingGameTypes.DoOrDrinkCard, numberOfPlayers: 1 },
  ...props
}: CardsFormProps) {
  const { register, handleSubmit, reset } = useForm<DrinkingGameCard>({
    defaultValues,
  });

  return (
    <form
      {...props}
      onSubmit={handleSubmit(value => {
        onSubmit(value, reset);
      })}
    >
      <Stack spacing={4}>
        <FormControl>
          <FormLabel color="#4b0a04" fontWeight={700}>
            Type
          </FormLabel>
          <Select bg="white" {...register('type', { required: true })}>
            {DRINKING_GAMES_TYPES.map(({ label, value }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel color="#4b0a04" fontWeight={700}>
            Number of Players
          </FormLabel>
          <Input
            bg="white"
            type="number"
            min={1}
            {...register('numberOfPlayers', {
              required: true,
              valueAsNumber: true,
            })}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="#4b0a04" fontWeight={700}>
            Phrase
          </FormLabel>
          <Textarea
            rows={7}
            bg="white"
            {...register('phrase', { required: true })}
          />
        </FormControl>
        <Button
          type="submit"
          isLoading={loading}
          bg="red.700"
          color="white"
          _hover={{
            bg: 'red.600',
          }}
        >
          Save
        </Button>
      </Stack>
    </form>
  );
}
