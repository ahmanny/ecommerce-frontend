import SettingsComponent from "@/components/admin/settings/SettingsComponent";

export default async function SettingsPage() {
  return (
    <div className="bg-background-b1 p-8 w-[85%] pb-16 rounded-md">
      {/* page heading */}
      <div className=" pb-8 border-b-[1px] border-solid border-gray-200 mb-12">
        <h1 className=" heading-h4 ">Settings</h1>
      </div>
      <SettingsComponent />
    </div>
  );
}
