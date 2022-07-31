import {
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Box,
  IconButton,
} from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FormHTMLAttributes } from 'react';
import { CloseIcon } from '@chakra-ui/icons';

export interface Player {
  name: string;
}
export interface PlayersFormValues {
  players: Player[];
}
export interface PlayersFormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (data: PlayersFormValues) => any;
  defaultValues?: PlayersFormValues;
}
export default function PlayersForm({
  onSubmit = () => {},
  defaultValues = { players: [{ name: '' }] },
  ...props
}: PlayersFormProps) {
  const { register, handleSubmit, control } = useForm<PlayersFormValues>({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'players', // unique name for your Field Array
  });

  return (
    <form {...props} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        {fields.map((field, index) => (
          <FormControl key={field.id}>
            <HStack alignItems="end">
              <Box flex="1">
                <FormLabel color="#4b0a04" fontWeight={700}>
                  PLAYER {index + 1}
                </FormLabel>
                <Input bg="white" {...register(`players.${index}.name`)} />
              </Box>
              <IconButton
                bg="none"
                aria-label="Remove"
                icon={<CloseIcon />}
                onClick={() => remove(index)}
              />
            </HStack>
          </FormControl>
        ))}
        <Button onClick={() => append({ name: '' })}>Add player</Button>
        <Button
          type="submit"
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
