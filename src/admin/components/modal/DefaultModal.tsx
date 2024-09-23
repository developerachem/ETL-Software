import { styles } from "../../../utils/cn";
import useModalOff from "../../hooks/modal/useModalOff";

// Modal component props
type Props = {
  children: React.ReactNode;
  title?: string;
  size?: string;
  className?: string;
  childrenStyle?: string;
  isCloseable?: boolean;
};

// Modal component
const DefaultModal = ({
  children,
  title = "Modal title",
  size = "5xl",
  className = "",
  childrenStyle = "",
  isCloseable = true,
}: Props) => {
  // * Hokes
  const closeModal = useModalOff();

  let maxWidthClass = "max-w-[924px] 2xl:max-w-[1224px]"; // Default value

  switch (size) {
    case "1xl":
      maxWidthClass = "max-w-[572px]";
      break;
    case "2xl":
      maxWidthClass = "max-w-[672px]";
      break;
    case "3xl":
      maxWidthClass = "max-w-[768px]";
      break;
    case "4xl":
      maxWidthClass = "max-w-[896px]";
      break;
    case "5xl":
      maxWidthClass = "max-w-[924px] 2xl:max-w-[1224px]";
      break;

    default:
      break;
  }

  return (
    <>
      <div>
        {/* Toggler checkbox */}
        <input
          type="checkbox"
          checked
          id="my_modal_6"
          className="modal-toggle"
          onChange={() => {}}
        />

        {/* Modal */}
        <div className="modal !bg-modalOverlay " role="dialog">
          <div
            className={styles(
              `modal-box p-0 bg-whiteColor border border-borderColor rounded-md min-h-[200px] overflow-hidden ${maxWidthClass} `,
              className
            )}
          >
            <div className="flex justify-between items-center border-b border-borderColor py-2 mx-8 pb sticky pt-8 top-0 bg-whiteBgColor z-50">
              {/* Title */}
              <h3 className="font-bold text-base xl:text-xl 2xl:text-2xl text-secondaryColor">
                {title}
              </h3>

              {/* Close button */}
              {isCloseable && (
                <button
                  className="text-textColor flex items-center justify-center hover:bg-ashColor h-5 w-5 2xl:h-7 2xl:w-7 2xl:me-2 rounded absolute right-2 top-10"
                  onClick={closeModal}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Children */}
            <div
              className={`px-8 py-6 ${childrenStyle}`}
              style={{ maxHeight: "calc(100vh - 145px)", overflowY: "auto" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultModal;
