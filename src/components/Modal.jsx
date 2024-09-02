
function Modal({ session, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex bg-[#CBEEFF] items-center justify-between px-10 py-3 gap-4">
          <h2 className="text-left font-bold text-[#444] text-[18px]">
            {session.title}
          </h2>
          <span className="close cursor-pointer" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="p-7">
          {session.time && (
            <div>
              <p>4 September 2024 {session.time} IST</p>
            </div>
          )}
          {session.category && (
            <div className="bg-[#CBEEFF] inline-block px-3 py-1 rounded-full my-1 text-[14px]">
              <p>{session.category}</p>
            </div>
          )}
          {session.slot && <div><p>{session.slot}</p></div>}
          <div className="allG">
            {session.text1 && <p className="font-bold text-[16px] py-1">{session.text1}</p>}
            {session.text2 && <p className="font-bold text-[16px] py-1">{session.text2}</p>}
            {session.text3 && <p className="font-bold text-[16px] py-1">{session.text3}</p>}
            {session.text4 && (
              <>
                <p className="font-bold text-[16px] pt-1">{session.text4}</p>
                <p className="font-normal text-[16px]">{session.subtext4}</p>
              </>
            )}
            {session.text5 && (
              <>
                <p className="font-bold text-[16px] pt-1">{session.text5}</p>
                <p className="font-normal text-[16px]">{session.subtext5}</p>
              </>
            )}
            {session.text6 && (
              <>
                <p className="font-bold text-[16px] pt-1">{session.text6}</p>
                <p className="font-normal text-[16px]">{session.subtext6_1}</p>
                <p className="font-normal text-[16px]">{session.subtext6_2}</p>
                <p className="font-normal text-[16px]">{session.subtext6_3}</p>
                <p className="font-normal text-[16px]">{session.subtext6_4}</p>
                <p className="font-normal text-[16px]">{session.subtext6_5}</p>
                <p className="font-normal text-[16px]">{session.subtext6_6}</p>
                <p className="font-normal text-[16px]">{session.subtext6_7}</p>
              </>
            )}
            {session.text7 && (
              <>
                <p className="font-bold text-[16px] pt-1">{session.text7}</p>
                <p className="font-normal text-[16px]">{session.subtext7_1}</p>
                <p className="font-normal text-[16px]">{session.subtext7_2}</p>
                <p className="font-normal text-[16px]">{session.subtext7_3}</p>
              </>
            )}
            {session.text8 && <p className="font-bold text-[16px] pt-1 pb-3">{session.text8}</p>}
          </div>
          {session.details && (
            <div className="py-4">
              <p className="font-normal text-[16px]">{session.details}</p>
            </div>
          )}
          {session.atend && (
            <div className="bg-[#444444] inline-block px-4 py-1 rounded-full text-white text-[14px]">
              <p>{session.atend}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;



