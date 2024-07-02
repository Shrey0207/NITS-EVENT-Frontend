import { Input, Form, Button, Tag } from "antd";
import { EventFormStepProps } from ".";
import { useState } from "react";

function General({
  currentStep,
  setCurrentStep,
  eventData,
  setEventData,
}: EventFormStepProps) {
  const [guestInputValue, setGuestInputValue] = useState("");
  const onGuestAdd = () => {
    const existingGuests = eventData.guests || [];
    const newGuests = guestInputValue.split(",");
    setEventData({ ...eventData, guests: [...existingGuests, ...newGuests] });
    setGuestInputValue("");
  };

  const onGuestRemove = (index: number) => {
    const existingGuests = eventData.guests || [];
    const newGuests = existingGuests.filter(
      (_guest: string, i: number) => i !== index
    );
    setEventData({ ...eventData, guests: newGuests });
  };
  return (
    <div className="flex flex-col gap-5">
      <Form.Item label="Event Name" required>
        <Input
          placeholder="Event Name"
          value={eventData.name}
          onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Description" required>
        <Input.TextArea
          placeholder="Description"
          value={eventData.description}
          onChange={(e) =>
            setEventData({ ...eventData, description: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item label="Organizer" required>
        <Input
          placeholder="Organizer"
          value={eventData.organizer}
          onChange={(e) =>
            setEventData({ ...eventData, organizer: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item label="Guests list (comma separated)" required>
        <div className="flex gap-5">
          <Input
            placeholder="Guests list (comma separated)"
            value={guestInputValue}
            onChange={(e) => setGuestInputValue(e.target.value)}
          />
          <Button onClick={onGuestAdd} disabled={!guestInputValue}>
            Add
          </Button>
        </div>
      </Form.Item>

      <div className="flex flex-wrap gap-5">
        {eventData.guests?.map((guest: string, index: number) => (
          <Tag key={guest} closable onClose={() => onGuestRemove(index)}>
            {guest}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default General;
