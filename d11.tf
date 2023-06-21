resource "google_project_iam_binding" "project" {
  project = "on-prem-project-337210"
  role    = "roles/owner"

  members = [
	"user:varundmishra@google.com","user:vikasmishra@google.com","user:sahilsanan@google.com",
  ]
}
