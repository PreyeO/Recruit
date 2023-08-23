import JobFilter from "./JobFilter";
import JobList from "./JobList";

const Jobs = () => {
  return (
    <section className="flex lg:gap-20 xs:gap-0 mb-8">
      <aside className="xs:basis-1/5 lg:basis-0">
        <JobFilter />
      </aside>
      <div className="lg:basis-4/5 xs:basis-0 w-full">
        <JobList />
      </div>
    </section>
  );
};

export default Jobs;
