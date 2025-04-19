CREATE TABLE "images_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_name" text NOT NULL,
	"is_favorite" boolean DEFAULT false,
	"is_archived" boolean DEFAULT false,
	"created_at" date DEFAULT now(),
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "images_table" ADD CONSTRAINT "images_table_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;