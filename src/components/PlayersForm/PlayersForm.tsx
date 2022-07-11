import {
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Box,
} from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FormHTMLAttributes } from 'react';

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
                <FormLabel>Player {index + 1}</FormLabel>
                <Input {...register(`players.${index}.name`)} />
              </Box>
              <Button onClick={() => remove(index)}>Remove</Button>
            </HStack>
          </FormControl>
        ))}
        <Button
          // bg="blue.400"
          // color="white"
          // _hover={{
          //   bg: 'blue.500',
          // }}
          onClick={() => append({ name: '' })}
        >
          Add player
        </Button>
        <Button
          type="submit"
          bg="blue.400"
          color="white"
          _hover={{
            bg: 'blue.500',
          }}
        >
          Save
        </Button>
      </Stack>
    </form>
  );
}
