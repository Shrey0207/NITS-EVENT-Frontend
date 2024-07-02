import PageTitle from "../../../../../components/page-title";
import EventForm from "../common/event-form";

function CreateEvenetPage() {
  return (
    <div>
      <PageTitle title="Create Event" />
      <div className="mt-5">
        <EventForm />
      </div>
    </div>
  );
}

export default CreateEvenetPage;
