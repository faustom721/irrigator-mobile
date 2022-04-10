import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import { axiosInstance } from '../utils/axios';

export default function FieldsScreen() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    (async () => {
      await getFields();
    })();
  });

  const getFields = async () => {
    try {
      const response = await axiosInstance.get('/fields');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Fields</Text>
    </View>
  );
}
