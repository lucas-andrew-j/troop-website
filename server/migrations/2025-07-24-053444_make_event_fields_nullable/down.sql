-- This file should undo anything in `up.sql`
ALTER TABLE "events" DROP COLUMN "id";
ALTER TABLE "events" DROP COLUMN "description";
ALTER TABLE "events" DROP COLUMN "end_date";
ALTER TABLE "events" DROP COLUMN "picture_id";
ALTER TABLE "events" DROP COLUMN "meeting_location";
ALTER TABLE "events" DROP COLUMN "thumbnail";
ALTER TABLE "events" ADD COLUMN "id" INT4 NOT NULL;
ALTER TABLE "events" ADD COLUMN "description" TEXT NOT NULL;
ALTER TABLE "events" ADD COLUMN "end_date" DATE NOT NULL;
ALTER TABLE "events" ADD COLUMN "picture_id" INT4 NOT NULL;
ALTER TABLE "events" ADD COLUMN "meeting_location" TEXT NOT NULL;
ALTER TABLE "events" ADD COLUMN "thumbnail" TEXT NOT NULL;

