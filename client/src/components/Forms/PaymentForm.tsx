/* eslint-disable @typescript-eslint/restrict-plus-operands */
// import React from 'react'

import React from "react";
import { Button, Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { selectDraw, setClose } from "../../context/drawerSlicde";
import axiosFetch from "../../utils/axiosFetch";

const FormDisabledDemo: React.FC = () => {
  const dispatch = useAppDispatch();

  const draw = useAppSelector(selectDraw);

  const onFinish = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const data = await axiosFetch("studentDebt/" + draw.initialValues.id, {
        method: "PATCH",
        data: {
          debt_summa: false,
        },
      });

      console.log(data.data);

      if (data.data) {
        dispatch(setClose());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        layout="horizontal"
        initialValues={draw.initialValues}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Summa" name={"summa"}>
          <Input width={draw.width ? draw.width : 400} disabled />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary" htmlType="submit">
            To`lov
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;
