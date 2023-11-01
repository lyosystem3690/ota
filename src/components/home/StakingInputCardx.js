import InputItem from './InputItemx'

const StakingInputCard = ({
    stakeTokensx,
    unstakeTokensx,
    uridiumBalance,
    unstakeTokenstimefalsex,
}) => {
    return (
        <div>
            <InputItem 
            stakeTokensx={stakeTokensx}
            unstakeTokensx={unstakeTokensx}
            uridiumBalance={uridiumBalance}
            unstakeTokenstimefalsex={unstakeTokenstimefalsex}
            />
        </div>
    )
}

export default StakingInputCard