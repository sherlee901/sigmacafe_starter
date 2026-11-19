const teamList = document.getElementById("team-list");
//change from querySelector(.btn) to getElementById
const sortButton = document.getElementById("sort");

let team = [...STAFF];

function renderTeam() {
  if (team.length === 0) {
    teamList.innerHTML = '<p class="empty">No team members found.</p>';
    return;
  }
  teamList.innerHTML = team
    .map(
      (person) => `
    <article class="person">
      <div class="avatar" style="background:${person.color}" aria-hidden="true">${person.name[0]}</div>
      <div>
        <h3>${person.name}</h3>
        <p class="role">${person.role}</p>
      </div>
    </article>
  `,
    )
    .join("");
}

function sortByName() {
  //added check below
  console.log("sortByName ran");

  team.sort((a, b) => a.name.localeCompare(b.name));
  renderTeam();
}

sortButton.addEventListener("click", sortByName);

renderTeam();
