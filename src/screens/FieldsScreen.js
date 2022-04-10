import { SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';

import { axiosInstance } from '../utils/axios';
import FieldsList from '../components/FieldsList';

export default function FieldsScreen() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    (async () => {
      await getFields();
    })();
  });

  const getFields = async () => {
    try {
      const { data } = await axiosInstance.get('/fields');
      setFields(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <FieldsList fields={fields} />
    </SafeAreaView>
  );
}
