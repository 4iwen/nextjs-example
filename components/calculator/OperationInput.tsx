import { Operation } from "@/pages/calculator";

interface OperationInputProps {
  setOperation: (operation: Operation) => void;
}

export default function OperationInput(props: OperationInputProps) {
  return (
    <div>
      <select
        className="border-2 rounded p-2 m-2 w-40"
        onChange={(e) => {
          props.setOperation(e.target.value as Operation);
        }}
      >
        {Object.values(Operation).map((operation: Operation, index: number) => (
          <option key={index} value={operation}>{operation}</option>
        ))}
      </select>
    </div>
  );
}
