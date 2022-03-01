class CreatePassages < ActiveRecord::Migration[6.0]
  def change
    create_table :passages do |t|
      t.text :text, null:false
      t.integer :seek_time
      t.references :note, foreign_key: true
      t.timestamps
    end
  end
end
