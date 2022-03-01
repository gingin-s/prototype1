class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.string :description
      t.string :youtube_id, null: false
      t.timestamps
    end
  end
end
