module PassagesHelper
  def timecode(seconds)
    min = (seconds / 60).floor
    sec = "%02d" % (seconds % 60)
    return "#{min}:#{sec}"
  end
end
