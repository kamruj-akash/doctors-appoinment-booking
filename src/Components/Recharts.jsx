import { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useDrList } from "../Hooks/useDrList";
import { getFromDb } from "../Utilities/localStorage";

const Recharts = () => {
  const [bookingList, setBookingList] = useState([]);
  const [drData] = useDrList();

  useEffect(() => {
    const savedData = getFromDb();
    const filterData = drData.filter((item) =>
      savedData.includes(item.reg_number)
    );
    setBookingList(filterData);
  }, [drData]);

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <>
      <BarChart width={800} height={300} data={bookingList}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="consultation_fee_bdt"
          fill="#8884d8"
          shape={<TriangleBar />}
        />
      </BarChart>
    </>
  );
};

export default Recharts;
