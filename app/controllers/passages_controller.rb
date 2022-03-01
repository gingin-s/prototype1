class PassagesController < ApplicationController

  def create
    @note = Note.find(params[:note_id])
    @passage = Passage.new(passage_params)
      if @passage.save
        @passages = @note.passages.order(seek_time: "ASC")
        gon.watch.passages = @passages
        render 'notes/edit.js.erb'
      end
  end

  private
  def passage_params
    params.require(:passage).permit(:text, :seek_time).merge(note_id: params[:note_id])
  end
end
