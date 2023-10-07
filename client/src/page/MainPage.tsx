import MainTable from "../components/Table";
import type { ColumnsType } from "antd/es/table";
import useFetchHook from "../hooks/useFetchHook";
import { url } from "../constant/constant";

const columns: ColumnsType<any> = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
    render: (_: any, r: any, index: any) => index + 1,
  },
  {
    title: "Group Nomi",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Fan",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Boshlanish Vaqti",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Kurs Narxi",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "Qarzdorlar Soni",
    dataIndex: "_count",
    key: "_count",
    render: (item: any) => item.students,
  },
];
function MainPage() {
  const { data, loading } = useFetchHook(url + "course");
  return (
    <>
      <MainTable columns={columns} loading={loading} data={data} />
    </>
  );
}

export default MainPage;
