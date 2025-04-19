CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"phone_number" text,
	"created_at" date DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "auth"."users" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "auth"."users" CASCADE;--> statement-breakpoint
ALTER TABLE "albums_table" DROP CONSTRAINT "albums_table_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "images_table" DROP CONSTRAINT "images_table_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "albums_table" ADD CONSTRAINT "albums_table_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "images_table" ADD CONSTRAINT "images_table_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;