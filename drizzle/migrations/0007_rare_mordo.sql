ALTER TABLE "albums_image_mapping" DROP CONSTRAINT "albums_image_mapping_album_id_albums_table_id_fk";
--> statement-breakpoint
ALTER TABLE "albums_image_mapping" DROP CONSTRAINT "albums_image_mapping_image_id_images_table_id_fk";
--> statement-breakpoint
ALTER TABLE "images_table" DROP CONSTRAINT "images_table_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "albums_image_mapping" ADD CONSTRAINT "albums_image_mapping_album_id_albums_table_id_fk" FOREIGN KEY ("album_id") REFERENCES "public"."albums_table"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "albums_image_mapping" ADD CONSTRAINT "albums_image_mapping_image_id_images_table_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images_table"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "images_table" ADD CONSTRAINT "images_table_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;