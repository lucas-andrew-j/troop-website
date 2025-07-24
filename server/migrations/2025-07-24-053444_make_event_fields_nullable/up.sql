-- Your SQL goes here
ALTER TABLE "events" DROP COLUMN "id";
ALTER TABLE "events" DROP COLUMN "description";
ALTER TABLE "events" DROP COLUMN "end_date";
ALTER TABLE "events" DROP COLUMN "picture_id";
ALTER TABLE "events" DROP COLUMN "meeting_location";
ALTER TABLE "events" DROP COLUMN "thumbnail";
ALTER TABLE "events" ADD COLUMN "id" SERIAL NOT NULL PRIMARY KEY;
ALTER TABLE "events" ADD COLUMN "description" TEXT;
ALTER TABLE "events" ADD COLUMN "end_date" DATE;
ALTER TABLE "events" ADD COLUMN "picture_id" INT4;
ALTER TABLE "events" ADD COLUMN "meeting_location" TEXT;
ALTER TABLE "events" ADD COLUMN "thumbnail" TEXT;

