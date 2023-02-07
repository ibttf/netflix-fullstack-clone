class Profiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :tag
      t.belongs_to :user
    end
  end
end
