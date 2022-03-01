class NotesController < ApplicationController
  def index
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      redirect_to edit_note_path(@note.id)
    else
      render :new
    end
  end

  def edit
    @note = Note.find(params[:id])
    @passages = @note.passages.order(seek_time: "ASC")
    @passage = Passage.new
    gon.youtube_id = @note.youtube_id
    gon.watch.passages = @passages
  end

  def update
  end

  private
  def note_params
    params.require(:note).permit(:title, :description).merge(youtube_id: get_youtube_id)
  end

  def get_youtube_id
    url = params[:note][:youtube_id]
    url.last(11)
  end

end
