import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-native-modern-datepicker";
import { storeData } from "../../storage/async-storage-functions";
import { useState } from "react";

export function Form() {
  const [name, setName] = useState();
  
  const [start,setStart] = useState();
  const [days,setDays] = useState();
  const [time,setTime] = useState();
  const [dosage,setDosage] = useState();
  const [daysToNotify,setDaysToNotify] = useState();
  
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

      <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Data de Início"
            onBlur={onBlur}
            onChangeText={(e) => setName(e.target.value)}
            value={start}
          />
        )}
        name="start"
      />
      {errors.start && <Text>This is required.</Text>}

        <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Dias"
            onBlur={onBlur}
            onChangeText={(e) => setName(e.target.value)}
            value={days}
          />
        )}
        name="days"
      />
      {errors.days && <Text>This is required.</Text>}

          <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Horário"
            onBlur={onBlur}
            onChangeText={(e) => setName(e.target.value)}
            value={time}
          />
        )}
        name="time"
      />
      {errors.time && <Text>This is required.</Text>}

            <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Dose"
            onBlur={onBlur}
            onChangeText={(e) => setName(e.target.value)}
            value={dosage}
          />
        )}
        name="dosage"
      />
      {errors.dosage && <Text>This is required.</Text>}

              <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Dias até Notificação"
            onBlur={onBlur}
            onChangeText={(e) => setName(e.target.value)}
            value={daysToNotify}
          />
        )}
        name="daysToNotify"
      />
      {errors.daysToNotify && <Text>This is required.</Text>}

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
