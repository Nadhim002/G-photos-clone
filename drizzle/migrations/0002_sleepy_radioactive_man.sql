ALTER TABLE "users_table" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "users_table" CASCADE;--> statement-breakpoint
ALTER TABLE "albums_table" DROP CONSTRAINT "albums_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "images_table" DROP CONSTRAINT "images_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "albums_table" ADD CONSTRAINT "albums_table_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "images_table" ADD CONSTRAINT "images_table_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;