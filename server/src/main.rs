use axum::{
    routing::{get},
    http::StatusCode,
    Json, Router,
};
use serde::{Deserialize, Serialize};
use time::{PrimitiveDateTime};

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let app = Router::new()
        .route("/", get(root))
        .route("/upcoming_events", get(upcoming_events));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn root() -> &'static str {
    "Hello, World!"
}

async fn upcoming_events() -> (StatusCode, Json<Event>) {
    let event = Event {
        id: 0,
        name: "name".to_string(),
        // start_date: payload.start_date,
        event_type: "event type".to_string(),
        meeting_location: "payload".to_string(),
        thumbnail: "thumbnail".to_string(),
    };

    (StatusCode::OK, Json(event))
}

#[derive(Deserialize)]
struct CreateEvent {
    name: String,
    // start_date: PrimitiveDateTime,
    event_type: String,
    meeting_location: String,
    thumbnail: String
}

#[derive(Serialize)]
struct Event {
    id: u64,
    name: String,
    // start_date: PrimitiveDateTime,
    event_type: String,
    meeting_location: String,
    thumbnail: String
}
