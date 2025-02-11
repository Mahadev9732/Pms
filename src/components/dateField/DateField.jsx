import React from "react";
import DatePicker from "react-datepicker";
import { CalendarDays } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

const DateField = ({ selectedDate, onDateChange, editable = true }) => (
  <div className="relative w-full">
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="dd/MM/yyyy"
      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 py-2.5"
      disabled={!editable}
      popperClassName="w-full"
    />
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
      <CalendarDays className="text-gray-500 h-5 w-5" />
    </div>
  </div>
);

export default DateField;
