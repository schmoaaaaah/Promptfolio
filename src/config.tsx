import React from 'react'
const github_username = 'schmoaaaaah'
const discord_usertag = 'schmoaaaaah'
const discord_userid = '226718239214927875'
const email = 'Schmoaaaaah@proton.me'

const projects = ['schmoaaaaah/yt-dlp-stash', 'schmoaaaaah/memorygametwist']

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/schmoaaaaah',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://schmoaaaaah.com',
		description: 'Personal website',
	},
	{
		name: 'Discord',
		link: `https://discord.com/users/${discord_userid}`,
		icon: 'fab fa-fw fa-discord',
		description: `${discord_usertag} | Add me as friend!`,
	},
	/*
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
*/
]

const info = (
	<>
		<p>
			Ello. I'am a trained FiSi and currently working as a Cloud Engineer.
		</p>
		<p>
			I've got intermediate experience with{' '}
			<span className="highlighted">Python</span> and{' '}
			<span className="highlighted">Shell Scripting</span> with bash and
			powershell.
		</p>
		<p>
			I've been doing <span className="highlighted">Selfhosting</span>{' '}
			with K8s and Flux as a fun pastime for a couple of years now.
			Currently, I'm learning{' '}
			<span className="highlighted">Terraform</span> and{' '}
			<span className="highlighted">CI/CD</span> more indepth.
		</p>
		<p>
			Aside from that, I have basic knowledge of{' '}
			<span className="highlighted">c++</span>,and{' '}
			<span className="highlighted">java</span>.
		</p>
		<p>
			When i am not sitting in front of a computer, I enjoy{' '}
			<span className="highlighted">Bouldering</span>.
		</p>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}
