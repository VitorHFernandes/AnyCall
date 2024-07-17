import { IconAdd } from "../Icons/Icons";

type tAppBarProps = {
  openDialog?: () => void
}

const AppBar = ({ openDialog }: tAppBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-lightItem dark:bg-darkItem p-4 lg:hidden flex justify-center items-center z-10">
      <div className="absolute bottom-1">
        <div id="1" className="w-16 h-16 rounded-full bg-white dark:bg-hoverItemDark shadow-2xl flex items-center justify-center overflow-hidden">
          <button 
            onClick={openDialog}
            className={`
              relative bg-lightItem hover:bg-primaryLight
            dark:bg-purpleDark dark:hover:bg-darkItem
            dark:hover:text-white dark:text-black
            text-black rounded-full w-14 h-14 flex items-center
             justify-center
            `}>
            {IconAdd(32, "#FFFFFF")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
