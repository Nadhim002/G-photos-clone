CREATE TABLE "albums_image_mapping" (
	"id" serial PRIMARY KEY NOT NULL,
	"album_id" serial NOT NULL,
	"image_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "albums_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"album_name" text NOT NULL,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users_table" (
	"id" uuid PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "images_table" DROP CONSTRAINT "images_table_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "albums_image_mapping" ADD CONSTRAINT "albums_image_mapping_album_id_albums_table_id_fk" FOREIGN KEY ("album_id") REFERENCES "public"."albums_table"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "albums_image_mapping" ADD CONSTRAINT "albums_image_mapping_image_id_images_table_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images_table"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "albums_table" ADD CONSTRAINT "albums_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "images_table" ADD CONSTRAINT "images_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;