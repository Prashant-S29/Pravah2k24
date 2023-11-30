const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema(
    {
        eventName: String,
        eventPhotoLink: String,
        eventCategoryID: String,
        eventType: String,
        eventRegistrationFee: String,
        eventRegistrationLink: String,
        eventDate: String,
        eventTime: String,
        eventVenue: String,
        eventBrochureLink: String,
        eventMaxParicipationLimit: String,
        eventCurrentParticipation: String,
    }, {
    timestamps: true,
}
)

const pravah2024_events = mongoose.models.pravah2024_events || mongoose.model("pravah2024_events", eventSchema)

export default pravah2024_events