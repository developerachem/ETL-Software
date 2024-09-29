import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Input from "../../../components/form-element/Input";
import Textarea from "../../../components/form-element/Textarea";
import {
  useCreateSettingsMutation,
  useGetSettingsQuery,
} from "../../../features/settings/settings";

function Settings() {
  const { data, isLoading } = useGetSettingsQuery(null);
  const [createSettings, { isLoading: createLoading }] =
    useCreateSettingsMutation();

  // * Local State
  const [title, setTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [footer, setFooter] = useState("");
  const [mail, setMail] = useState("");
  const [mailPassword, setMailPassword] = useState("");
  const [mailPort, setMailPort] = useState("");
  const [isReceive, setIsReceive] = useState(false);
  const [adminTemplate, setAdminTemplate] = useState("");
  const [clientTemplate, setClientTemplate] = useState("");
  const [footerRightText, setFooterRightText] = useState("");

  // * Handle Settings Update
  const handleSettingsUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // * Settings Payload
    const payload = {
      webTitle: title,
      metaDescription,
      footerText: footer,
      smtpEmail: mail,
      emailPassword: mailPassword,
      mailPort: parseInt(mailPort),
      isClientReceiveMail: isReceive,
      adminEmailTemplate: adminTemplate,
      clientEmailTemplate: clientTemplate,
      footerRightText,
    };

    createSettings(payload)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // * Update Data After Loading
  useEffect(() => {
    if (!isLoading) {
      setTitle(data?.data?.webTitle || "");
      setMetaDescription(data?.data?.metaDescription || "");
      setFooter(data?.data?.footerText || "");
      setMail(data?.data?.smtpEmail || "");
      setMailPassword(data?.data?.emailPassword || "");
      setMailPort(data?.data?.mailPort || "");
      setIsReceive(data?.data?.isClientReceiveMail || false);
      setAdminTemplate(data?.data?.adminEmailTemplate || "");
      setClientTemplate(data?.data?.clientEmailTemplate || "");
      setFooterRightText(data?.data?.footerRightText || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  console.log(data?.data?.isClientReceiveMail);

  return (
    <form className="p-5 pt-2" onSubmit={handleSettingsUpdate}>
      <h1 className="font-[font-600] text-[20px] border-b mb-5">
        Application Settings
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <div className="flex gap-5">
            <div className="">
              <h1 className="font-[font-500] text-[16px]">Logo</h1>
              <div className=" border p-6 relative bg-white rounded-lg h-[120px] w-[200px]">
                <img src="/logo.png" className="" alt="" />
                <label className="absolute top-0 right-0 p-1 bg-primaryColor rounded-bl-lg rounded-tr-lg cursor-pointer">
                  <img src="/upload.png" className="h-[25px] w-[25px]" alt="" />
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="">
              <h1 className="font-[font-500] text-[16px]">Fev Icon</h1>
              <div className=" border p-6 relative bg-white rounded-lg h-[120px] w-[120px]">
                <img src="/fev.png" className="" alt="" />
                <label className="absolute top-0 right-0 p-1 bg-primaryColor rounded-bl-lg rounded-tr-lg cursor-pointer">
                  <img src="/upload.png" className="h-[25px] w-[25px]" alt="" />
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="" />

        <Input
          title="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div />
        <Textarea
          title="Footer Left Text"
          value={footer}
          onChange={(e: string) => setFooter(e)}
        />
        <Textarea
          title="Footer Right Text"
          onChange={(e: string) => setFooterRightText(e)}
          value={footerRightText}
        />
      </div>

      <h1 className="font-[font-600] text-[20px] border-b mb-5 mt-6">
        Application Settings
      </h1>
      <div className="grid grid-cols-2 gap-5 items-center">
        <Input
          title="SMTP Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
          type="email"
        />
        <Input
          title="SMTP Mail Password"
          value={mailPassword}
          onChange={(e) => setMailPassword(e.target.value)}
          required
          type="password"
        />
        <Input
          title="SMTP Mail PORT"
          value={mailPort}
          onChange={(e) => setMailPort(e.target.value)}
          required
          type="number"
        />
        <div className="">
          <label className="font-[font-500] cursor-pointer">
            <input
              type="checkbox"
              id="isSMTP"
              checked={isReceive}
              onChange={(e) => setIsReceive(e.target.checked)}
              className="form-checkbox mr-2"
            />
            Is User Receive Confirmation Message
          </label>
        </div>
        <div className="">
          <Textarea
            title="Admin Email Template"
            rows={20}
            onChange={(e: string) => setAdminTemplate(e)}
            value={adminTemplate}
            required
          />
          <p className="text-[14px]">
            Please Template Update With this key ={" "}
            <b className="text-green-600 text-[15px] font-[font-500]">[name]</b>{" "}
            ,{" "}
            <b className="text-green-600 text-[15px] font-[font-500]">
              [email]
            </b>{" "}
            ,{" "}
            <b className="text-green-600 text-[15px] font-[font-500]">
              [subject]
            </b>{" "}
            ,{" "}
            <b className="text-green-600 text-[15px] font-[font-500]">
              [message]
            </b>
          </p>
        </div>

        <div className="">
          <Textarea
            title="Sender Email Template"
            rows={20}
            onChange={(e: string) => setClientTemplate(e)}
            value={clientTemplate}
          />

          <p className="text-[14px]">
            Please Template Update With this key ={" "}
            <b className="text-green-600 text-[15px] font-[font-500]">[name]</b>{" "}
            ,{" "}
            <b className="text-green-600 text-[15px] font-[font-500]">
              [email]
            </b>{" "}
            ,{" "}
            <b className="text-green-600 text-[15px] font-[font-500]">
              [subject]
            </b>{" "}
            ,{" "}
            <b className="text-green-600 text-[15px] font-[font-500]">
              [message]
            </b>
          </p>
        </div>
      </div>

      <button
        disabled={createLoading}
        className="bg-primaryColor py-3 px-10 rounded-lg text-white font-[font-500] mt-10"
      >
        {createLoading ? "Loading..." : "Save"}
      </button>
    </form>
  );
}

export default Settings;
