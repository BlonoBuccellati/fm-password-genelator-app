import { Label } from "@/components/ui/label";

const StrengthIndicator = () => {
  return (
    <div className="flex items-center space-x-200 text-white">
      <span className="uppercase">medium</span>
      <div className="flex gap-100">
        <span className="block h-[28px] w-[10px] bg-yellow-300" />
        <span className="block h-[28px] w-[10px] bg-yellow-300" />
        <span className="block h-[28px] w-[10px] bg-yellow-300" />
        <span className="block h-[28px] w-[10px] bg-yellow-300" />
      </div>
    </div>
  );
};

const StrengthBox = () => {
  return (
    <div className="bg-grey-850 flex items-center justify-between p-200">
      <Label className="typo-4 text-grey-600 uppercase">strength</Label>
      <StrengthIndicator />
    </div>
  );
};

export default StrengthBox;
