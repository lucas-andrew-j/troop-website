// @generated automatically by Diesel CLI.

diesel::table! {
    events (id) {
        id -> Int4,
        name -> Text,
        description -> Text,
        start_date -> Date,
        end_date -> Date,
        picture_id -> Int4,
        event_type -> Text,
        meeting_location -> Text,
        thumbnail -> Text,
    }
}
