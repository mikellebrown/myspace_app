Friend.destroy_all

100.times do 
  name = Faker::Name.name  
  avatar = Faker::Avatar.image(slug: name, size: "100x200", format: "png", set: "set5")
  post = Faker::Lorem.paragraph(sentence_count: 2, supplemental: true)
  Friend.create(name: name, avatar: avatar, post: post)
end


puts "100 friends seeded"