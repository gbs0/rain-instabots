class Parse
  def initialize
  	@read_mode = "r"
		@save_mode = "wb" 	 
		@names_array = []
  end

	def load(file_path)
	 File.open(file_path, @read_mode) do |file|
	 	file.each do |names|
	 		@names_array.push(names.chomp)
	 	end
	 	@names_array
	 end
	end

	# def self.save(csv_file_path)
	# 	CSV.open(csv_file_path, save_mode) do |csv|
       
	# 	end
	# end
end

p Parse.new.load(ARGV.first.to_s)
