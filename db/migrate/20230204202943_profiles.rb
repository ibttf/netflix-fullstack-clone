class Profiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.integer :profile_id
      t.string :tag
      t.integer :user_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
  end
end
