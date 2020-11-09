class ContactForm < MailForm::Base
  attribute :name, :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   :validate => true
  attribute :subject,   :validate => true
  attribute :created_at
  attribute :updated_at

  def headers
    {
      :subject => subject,
      :to => "frunza.sergiu3@gmail.com",
      :from => %("#{name}" <#{email}>),
      # template_name: "contact_form"
    }
  end
end
