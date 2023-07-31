import { useEffect, useState } from "react";
import { getAllValues, getValue } from "../../storage/async-storage-functions";

export function useMedicine(activeScreen) {
  const [medicines, setMedicines] = useState([]);
  const [medicineToEditKey, setMedicineToEditKey] = useState("");
  const [medicineToEdit, setMedicineToEdit] = useState();

  useEffect(() => {
    getAllValues().then((response) => setMedicines(response));
  }, [activeScreen]);

  useEffect(() => {
    if (medicineToEditKey.length > 0) {
      getValue(medicineToEditKey).then((response) =>
        setMedicineToEdit(response)
      );
    } else {
      setMedicineToEdit({
        name: "",
        start: new Date(),
        days: [],
        time: "",
        dosage: "",
        currentQuantity: "",
        daysToNotify: "",
      });
    }
  }, [medicineToEditKey]);

  return { medicines, medicineToEdit, setMedicineToEditKey };
}
