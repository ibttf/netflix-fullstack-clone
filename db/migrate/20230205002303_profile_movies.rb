class ProfileMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :profile_movies do |t|
      t.integer :profile_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
  end
end
