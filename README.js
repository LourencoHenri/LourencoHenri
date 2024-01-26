<div className="text-white h-svh min-h-96 w-full absolute flex justify-center items-center">
			<div className="text-center flex flex-col">
				<h1 className="text-xl md:text-2xl">{t(`home.hello`)}</h1>
				<h1 className="text-7xl md:text-9xl font-medium">{t(`home.name`)}</h1>
				<h1 className="text-2xl md:text-3xl font-medium mt-2 md:mt-4">
					{t(`home.role`)}
				</h1>
				<div className="flex justify-center gap-2 mt-2">
					<a
						href="https://github.com/LourencoHenri"
						target="_blank"
						className="flex flex-row gap-4 p-1 rounded cursor-pointer duration-300 hover:text-blue-400"
					>
						<SiGithub size={28} />
					</a>
					<a
						href="https://www.linkedin.com/in/henrique-lourenco/"
						target="_blank"
						className="flex flex-row gap-4 p-1 rounded justify-center items-center cursor-pointer duration-300 hover:text-blue-400"
					>
						<SiLinkedin size={28} />
					</a>
				</div>
			</div>
		</div>
