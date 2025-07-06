import ActivitiesBlock from "./ActivitiesBlock";
export const ActivitiesPage = () => {
  return (
    <div className="bg-red-200 flex flex-col gap-8 md:gap-12 lg:gap-16 py-12 px-4 md:px-8 lg:px-30 ">
      <div className="bg-white rounded-lg shadow-lg md:p-6">
        <ActivitiesBlock
          imageSrc="/img/abc.png"
          imageAlt="testing123"
          title="this is abc"
          description="this is conception about abc"
          reverse
        />
        <ActivitiesBlock
          imageSrc="/img/abc.png"
          imageAlt="testing123"
          title="this is abc"
          description="this is conception about abc"
        />
        <ActivitiesBlock
          imageSrc="/img/abc.png"
          imageAlt="testing123"
          title="this is abc"
          description="this is conception about abc"
          reverse
        />
      </div>
    </div>
  );
};
