-- Your SQL goes here
CREATE TABLE "events"(
	"id" INTEGER NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"start_date" DATE NOT NULL,
	"end_date" DATE NOT NULL,
	"picture_id" INTEGER NOT NULL,
	"event_type" TEXT NOT NULL,
	"meeting_location" TEXT NOT NULL,
	"thumbnail" TEXT NOT NULL
);

