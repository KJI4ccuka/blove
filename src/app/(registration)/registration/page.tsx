'use client'

import { Page } from '@/shared/components/page'
import { Container } from '@/shared/components/ui/container'
import { Button, Input, Modal, Placeholder, Steps } from '@telegram-apps/telegram-ui'
import { initData, useSignal } from '@telegram-apps/sdk-react'
import { useRouter } from 'next/navigation'
import { useRegistration } from '@/store/registration/registration.store'
import { useState } from 'react'
import {
  ModalHeader
} from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader'
import { UserAvatar } from '@/shared/components/ui/avatar'

export default function Registration() {
  const initDataState = useSignal(initData.state)
  const router = useRouter()

  const { currentStep, profileData, steps, setProfileData, prevStep, nextStep } = useRegistration()
  const currentStepName = steps[currentStep]
  const [gender, setGender] = useState<any>()


  const handleNext = () => {
    if (currentStep >= 3) {
      alert('Profile Completed')
      router.push('/home')
    } else {
      nextStep()
    }
  }

  const handlePrev = () => {
    prevStep()
  }

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ]

  return (
    <Page back={false}>
      <Container className={'flex flex-col justify-end h-screen pb-10'}>

        {currentStepName === 'Welcome' &&
          <div className={''}>
            <Placeholder
              action={
                <Button onClick={() => handleNext()} size="l" stretched>{`Let's start`}</Button>
              }
              header="Welcome"
              description={`@${initDataState?.user?.username}`}
            >
              <img
                alt="Telegram sticker"
                className="blt0jZBzpxuR4oDhJc8s"
                src="https://xelene.me/telegram.gif"
              />
            </Placeholder>
          </div>
        }

        {currentStepName === 'Name' &&
          <>
            <Placeholder
              action={
                <div className={'flex flex-col w-full gap-6'}>
                  <Modal
                    header={<ModalHeader></ModalHeader>}
                    trigger={<Input header="Your name" value={initDataState?.user?.firstName}  />}
                  >
                    <Placeholder

                    >
                      <Input header="Your name" placeholder={initDataState?.user?.firstName} />
                      <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                    </Placeholder>
                  </Modal>

                  <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                  <Button onClick={() => handlePrev()} mode={'outline'} size="l" stretched>Previous</Button>
                </div>
              }
              header={'Fill in the name field'}
              description={'The way other people will see your name'}
            >
              <UserAvatar/>
            </Placeholder>
          </>
        }

        {currentStepName === 'Age' &&
          <div className={''}>
            <Placeholder
              action={
                <>
                  <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                  <Button onClick={() => handlePrev()} mode={'outline'} size="l" stretched>Previous</Button>
                </>
              }
              header="Your Age"
              description={`@${initDataState?.user?.username}`}
            >
              <img
                alt="Telegram sticker"
                className="blt0jZBzpxuR4oDhJc8s"
                src=""
              />
            </Placeholder>
          </div>
        }

        {currentStepName === 'Gender' &&
          <>
            <Placeholder
              action={
                <>
                  <Modal
                    header={<ModalHeader></ModalHeader>}
                    trigger={<Input header="Your gender" value={initDataState?.user?.firstName}  />}
                  >
                    <Placeholder>
                      <Input header="Your name" placeholder={initDataState?.user?.firstName} />
                      <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                    </Placeholder>
                  </Modal>

                  <Button onClick={() => handleNext()} size="l" stretched>Continue</Button>
                  <Button onClick={() => handlePrev()} mode={'outline'} size="l" stretched>Previous</Button>
                </>
              }
              header={'Fill in the Gender field'}
              description={'The way other people will see your name'}
            >
              <UserAvatar/>
            </Placeholder>
          </>
        }

        <Steps
          className={'absolute bottom-1.5 w-full'}
          count={steps.length + 1}
          progress={currentStep + 1}
        />
      </Container>
    </Page>
  )
}
