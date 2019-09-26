class AddCloseFriendsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :close_friends, :text
  end
end
