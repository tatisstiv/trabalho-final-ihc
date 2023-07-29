import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-native-modern-datepicker";
import { storeData } from "../../storage/async-storage-functions";
import { useState } from "react";

export function Form() {
  const [name, setName] = useState();
  const [howManyLeft, setHowManyLeft] = useState();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => storeData(data.name, data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Remédio"
            onBlur={onBlur}
            onChangeText={(e) => setName(e.target.value)}
            value={name}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Quantos comprimidos faltam"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="howManyLeft"
      />
      {errors.howManyLeft && <Text>This is required.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
