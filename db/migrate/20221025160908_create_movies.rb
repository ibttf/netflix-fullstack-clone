class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.integer :movie_id

      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
