// @generated automatically by Diesel CLI.

diesel::table! {
    events (id) {
        name -> Text,
        start_date -> Date,
        event_type -> Text,
        id -> Int4,
        description -> Nullable<Text>,
        end_date -> Nullable<Date>,
        picture_id -> Nullable<Int4>,
        meeting_location -> Nullable<Text>,
        thumbnail -> Nullable<Text>,
    }
}
